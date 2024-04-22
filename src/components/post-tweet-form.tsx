import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { GIFIcon, PhotoIcon } from "./icon-components";

export default function PostTweetForm() {
  const textarea = useRef();
  const [isLoading, setLoading] = useState(false);
  const [tweet, setTweet] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTweet(value);
    resizeTextarea();
  };
  const resizeTextarea = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };
  return (
    <Wrapper>
      <img src="" alt="프로필이다" />
      <Form>
        <TextArea
          ref={textarea}
          placeholder="무슨 일이 일어나고 있나요?"
          rows={1}
          maxLength={200}
          value={tweet}
          onChange={handleTextAreaChange}
        />
        <ToolBar>
          <AttatchButtons>
            <AttatchFileBtn htmlFor="file">
              <PhotoIcon />
            </AttatchFileBtn>
            <TooltipBtn>
              <GIFIcon />
            </TooltipBtn>
          </AttatchButtons>
          <AttatchFileInput
            onChange={handleFileChange}
            type="file"
            id="file"
            accept="image/*"
          />
          <Button
            type="submit"
            value={isLoading ? "Poasting..." : "게시하기"}
            sort="base"
            size="M"
          />
        </ToolBar>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 15px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: black;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  border: none;
  font-family: inherit;
  resize: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AttatchButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const TooltipBtnStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;
  svg {
    width: 30px;
    color: var(--main-Color);
  }
  &:hover {
    background: var(--main-lite_hover);
  }
`;
const TooltipBtn = styled.button`
  background: none;
  border: none;
  ${TooltipBtnStyle}
`;
const AttatchFileBtn = styled.label`
  ${TooltipBtnStyle}
`;
const AttatchFileInput = styled.input`
  display: none;
`;
