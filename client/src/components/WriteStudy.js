import React from "react";
import { WriteInputContainer } from "./ui/WriteInput";

function WriteStudy() {
  return (
    <>
      <WriteInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input id="title" placeholder="제목을 입력해주세요." />
        </div>
      </WriteInputContainer>
    </>
  );
}

export default WriteStudy;
