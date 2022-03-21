import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';
import { INIT_QUERY_STRING } from '../constant/baseQuery';

const useQueryString = () => {
  let nextSearchParams;
  const [searchParams, setSearchParams] = useSearchParams(INIT_QUERY_STRING);
  const navigate = useNavigate();

  function createNextParams() {
    nextSearchParams = createSearchParams(searchParams);
  }

  function applyNextQueryString() {
    setSearchParams(nextSearchParams);
    nextSearchParams = null;
  }

  function deleteKeyFromQS(optionKey) {
    nextSearchParams.delete(optionKey);
  }

  function navigateWithQS(pathname) {
    navigate(`${pathname}?${searchParams}`);
  }

  function updateParams(userQueryObj) {
    createNextParams();
    for (const [queryKey, queryValue] of Object.entries(userQueryObj)) {
      nextSearchParams.set(queryKey, queryValue);
    }
    applyNextQueryString();
  }

  function initQSEntry(allOptionList, optionKey, selectedOption) {
    createNextParams();
    deleteKeyFromQS(optionKey);
    addFirstEntries();

    function addFirstEntries() {
      for (const option of allOptionList) {
        const isSelectedOption = option.id !== selectedOption;
        isSelectedOption && nextSearchParams.append(optionKey, option.id);
      }
    }
  }

  function toggleQSOption(optionKey, selectedOption) {
    if (!nextSearchParams) createNextParams();
    const isSelectedOptionExist = nextSearchParams
      .getAll(optionKey)
      .includes(selectedOption);

    // key=id 쌍이 있다면 ? 제거 : 없다면 추가
    isSelectedOptionExist ? deleteToggleOption() : addToggleOption();
    applyNextQueryString();

    function deleteToggleOption() {
      const existValues = nextSearchParams.getAll(optionKey);
      const nextQueryValues = existValues.filter(
        existValue => existValue !== selectedOption
      );
      deleteKeyFromQS(optionKey);
      for (const queryValue of nextQueryValues) {
        nextSearchParams.append(optionKey, queryValue);
      }
    }

    function addToggleOption() {
      nextSearchParams.append(optionKey, selectedOption);
    }
  }

  function toggleQueryString(optionList, optionKey, selectedOption) {
    const isFirstToggle = !searchParams.has(optionKey);
    // 처음 누르는 경우 -> params에 모두 추가후 그 후에 toggle 해주어야 함

    if (isFirstToggle) initQSEntry(optionList, optionKey, selectedOption);
    toggleQSOption(optionKey, selectedOption);
  }

  function getFilteredParams(userRequestKeys) {
    const queryEntries = [...searchParams.entries()];
    const filteredEntries = queryEntries.filter(([requestedKey, _]) =>
      userRequestKeys.includes(requestedKey)
    );
    const filteredObj = Object.fromEntries(filteredEntries);
    return filteredObj;
  }

  function deleteOption(optionKeys) {
    createNextParams();
    for (const optionKey of optionKeys) {
      deleteKeyFromQS(optionKey);
    }
    applyNextQueryString();
  }

  return {
    searchParams,
    navigateWithQS,
    updateParams,
    toggleQueryString,
    getFilteredParams,
    deleteOption,
  };
};

export default useQueryString;
