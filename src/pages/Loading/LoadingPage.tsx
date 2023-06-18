import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { LoadingContainer } from "./LoadingPageStyled";

export function LoadingPage() {
  return (
    <LoadingContainer>
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
        style={{ bottom: "50%", left: "50%", position: "absolute" }}
      />
    </LoadingContainer>
  );
}
