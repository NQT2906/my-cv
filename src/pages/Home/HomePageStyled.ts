import { Divider, Image } from "antd";
import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const InformationSection = styled.div`
  display: flex;

  background-color: var(--custom-black);
  color: var(--color-font-light);

  min-height: 100px;
  width: 100%;
  font-size: 20px;
  padding: 1em;
  border-radius: 10px;
`;

export const InformationWrapper = styled.div<{
  width: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.width < 1026 ? "column" : "row")};

  width: inherit;

  & > .information-container {
    margin-left: ${(props) => (props.width < 1026 ? "0" : "1em")};
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-self: center;

  background-color: gray;
  margin-bottom: 1em;

  border: 5px solid var(--custom-yellow);
  border-radius: 100%;
`;

export const AvatarCustom = styled(Image)`
  object-fit: cover;
  border-radius: 100%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: -8px;
`;

export const RowInformation = styled.div<{ width: number }>`
  display: flex;
  align-items: ${(props) => (props.width < 750 ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.width < 750 ? "column" : "row")};

  background-color: var(--custom-soft-black);
  margin-top: 8px;
  padding: 5px;

  & > .label-custom {
    width: ${(props) => (props.width < 750 ? "100%" : "180px")};
  }

  & > .content-custom {
    width: ${(props) => (props.width < 750 ? "100%" : "70%")};
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  overflow-wrap: break-word;
`;

export const ContentWrapper = styled.div`
  overflow-wrap: break-word;

  & > a {
    text-decoration: none;
    color: var(--color-font-light);
  }
`;

export const SocialNetworkWrapper = styled.div`
  margin-left: -10px;
  & > span {
    margin-left: 10px;
  }
`;

export const WorkExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--custom-black);
  color: white;
  padding: 1em;
  border-radius: 10px;
`;

export const WorkExperienceHeader = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  font-size: 30px;
  text-transform: uppercase;

  border-bottom: 1px solid var(--custom-yellow);
`;

export const ListProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;
  font-weight: 400;
  margin-top: -15px;
`;

export const ProjectWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-direction: ${(props) => (props.width < 750 ? "column" : "row")};

  margin-left: -20px;
  margin-top: 15px;

  & > .certInfoWrapper {
    .projectName {
      margin-bottom: 5px;

      .certLink {
        color: var(--color-font-grey);
      }
    }
  }
`;

export const TimeWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.width < 750 ? "100%" : "250px")};

  margin-left: 20px;
  white-space: nowrap;
  margin-top: 4px;
  margin-bottom: ${(props) => (props.width < 750 ? "10px" : "0")};
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: justify;

  margin-left: 20px;

  & > .projectName {
    font-size: 20px;
    font-weight: 500;
  }

  & > .projectRole {
    color: var(--color-font-grey);
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 10px;
  }

  & > .careerAdditional {
    color: var(--color-font-grey);
    font-size: 16px;
    font-weight: 400;

    margin-top: -10px;
    margin-bottom: 10px;
  }
`;

export const CustomDivider = styled(Divider)`
  border-color: var(--color-font-soft-light);
  min-width: 50% !important;
  width: 50%;
  align-self: center;
`;

export const ListSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;

  font-size: 16px;
  font-weight: 400;
  margin-top: -15px;
  margin-left: -50px;
`;

export const SkillsWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-grow: 0;
  flex-direction: ${(props) => (props.width < 750 ? "column" : "row")};
  align-items: ${(props) => (props.width < 750 ? "" : "center")};
  justify-content: ${(props) => (props.width < 750 ? "center" : "")};

  margin-top: 15px;
  margin-left: 50px;

  & > .skillName {
    width: ${(props) => (props.width < 750 ? "100%" : "90px")};
  }

  & > .skillPercent {
    margin-bottom: 10px;
  }
`;
