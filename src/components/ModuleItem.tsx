import styled from "styled-components";

interface ModuleItemPorps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}
const ModuleItemTitle = styled.div`
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 54px;
  min-height: 30px;
  white-space: nowrap;
  color: #158de8;
  font-size: 20px;
  font-weight: 700;
`;
const ModuleItemSubTitle = styled.div`
  letter-spacing: 0;
  line-height: 40px;
  margin-top: 5px;
  min-height: 58px;
  white-space: nowrap;
  font-weight: 700;
  font-size: 40px;
`;
function ModuleItem(porps: ModuleItemPorps) {
  return (
    <div>
      <ModuleItemTitle>{porps.title}</ModuleItemTitle>
      <ModuleItemSubTitle>{porps.subTitle}</ModuleItemSubTitle>
      {porps.children}
    </div>
  );
}

export default ModuleItem;
