import styled from "@emotion/styled";

export const LogoImage = styled(
  ({ src, className }: { src: any; className: any }) => {
    return <img src={src} alt="" className={className} />;
  }
)`
  width: 50px;
  height: 50px;
`;
