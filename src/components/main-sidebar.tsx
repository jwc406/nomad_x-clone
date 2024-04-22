import styled from "styled-components";
import { SearchIcon } from "./icon-components";

export default function MainSidebar() {
  return (
    <Warpper>
      <SearchBar>
        <SearchIcon />
        <input type="text" placeholder="검색" />
      </SearchBar>
      <TrendSection>나를 위한 트렌드</TrendSection>
    </Warpper>
  );
}

const Warpper = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  height: fit-content;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 50px;
  padding: 20px;
  background: var(--box-Color);
  border-radius: 20px;
  input {
    background: none;
    border: none;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    &:focus {
      outline: none;
    }
  }
`;
const TrendSection = styled.section`
  height: 100px;
  background: var(--box-Color);
  border-radius: 20px;
`;
