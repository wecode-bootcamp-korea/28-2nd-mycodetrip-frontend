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
    applyNextQueryString();

    function addFirstEntries() {
      for (const option of allOptionList) {
        const isSelectedOption = option.id !== selectedOption;
        isSelectedOption && nextSearchParams.append(optionKey, option.id);
      }
    }
  }

  function toggleQSOption(optionKey, selectedOption) {
    createNextParams();
    const isSelectedOptionExist = searchParams
      .getAll(optionKey)
      .includes(selectedOption);
    isSelectedOptionExist ? deleteToggleOption() : addToggleOption();
    applyNextQueryString();

    function deleteToggleOption() {
      const existValues = searchParams.getAll(optionKey);
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
    const hasOptionKey = searchParams.has(optionKey);
    hasOptionKey
      ? initQSEntry(optionList, optionKey, selectedOption)
      : toggleQSOption(optionKey, selectedOption);
  }

  function getFilteredParams(userRequestKeys) {
    const queryEntries = [...searchParams.entries()];
    const filteredEntries = queryEntries.filter(([requestedKey, _]) =>
      userRequestKeys.includes(requestedKey)
    );
    const filteredObj = Object.fromEntries(filteredEntries);
    return filteredObj;
  }

  return {
    searchParams,
    navigateWithQS,
    updateParams,
    toggleQueryString,
    getFilteredParams,
  };
};

export default useQueryString;
