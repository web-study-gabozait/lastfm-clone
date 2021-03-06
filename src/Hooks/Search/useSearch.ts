import { ChangeEvent, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { keywordData, submitKeywordData } from "src/Store/KeywordAtom";

const useSearch = () => {
  const [submitKeyword, setSubmitKeyword] = useRecoilState(submitKeywordData);
  const [keyword, setKeyword] = useRecoilState(keywordData);
  const resetKeyword = useResetRecoilState(keywordData);

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSubmitKeyword(keyword);
    resetKeyword();
  };

  return {
    onChangeKeyword,
    onSubmit,
  };
};

export default useSearch;
