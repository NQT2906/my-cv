import MyAvatar from "@assets/images/Avatar.jpg";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import { Image } from "antd";
import moment from "moment";
import { Fragment } from "react";
import {
  AvatarContainer,
  AvatarCustom,
  ContentWrapper,
  CustomDivider,
  HomeContainer,
  InformationContainer,
  InformationSection,
  InformationWrapper,
  LabelWrapper,
  ListProjectWrapper,
  ListSkillsWrapper,
  ProjectContentWrapper,
  ProjectWrapper,
  RowInformation,
  SkillsWrapper,
  SocialNetworkWrapper,
  TimeWrapper,
  WorkExperienceHeader,
  WorkExperienceWrapper,
} from "./HomePageStyled";
import { useHomePage } from "./useHomePage";

const HomePage = () => {
  const { state } = useHomePage();

  return (
    <HomeContainer>
      <InformationSection>
        <InformationWrapper id="avatarId" width={state.width}>
          <AvatarContainer>
            <AvatarCustom
              src={MyAvatar}
              preview={false}
              width={150}
              height={150}
            />
          </AvatarContainer>
          <InformationContainer className="information-container">
            {Object.keys(state.MASTER_DATA).map(
              (key: string, index: number) => {
                return (
                  <RowInformation width={state.width} key={index}>
                    <LabelWrapper className="label-custom">{`${state.MASTER_DATA[key].label}: `}</LabelWrapper>
                    <ContentWrapper className="content-custom">
                      {!key?.toString()?.toLowerCase()?.includes("network") ? (
                        state.MASTER_DATA[key].content
                      ) : (
                        <SocialNetworkWrapper>
                          {Object.keys(state.MASTER_DATA[key].content).map(
                            (subKey: string, subIndex: number) => {
                              return (
                                <span key={`${index} ${subIndex}`}>
                                  {state.MASTER_DATA[key].content[subKey]}
                                </span>
                              );
                            }
                          )}
                        </SocialNetworkWrapper>
                      )}
                    </ContentWrapper>

                    {/* if (!key?.includes("network")) {
                 return <span>{`${key}: ${state.MASTER_DATA[key]}`}</span>;
               } else {
                 return <span>asddas</span>;
               } */}
                  </RowInformation>
                );
              }
            )}
          </InformationContainer>
        </InformationWrapper>
      </InformationSection>

      <WorkExperienceWrapper>
        <WorkExperienceHeader>Work Experience</WorkExperienceHeader>
        <ListProjectWrapper>
          {state.LIST_PROJECTS.map((project, index) => {
            return (
              <Fragment key={index}>
                <ProjectWrapper width={state.width}>
                  <TimeWrapper width={state.width}>
                    {`${moment(project?.timeFrom).format("MM/YYYY")} ~ ${moment(
                      project?.timeTo
                    ).format("MM/YYYY")}`}
                  </TimeWrapper>

                  <ProjectContentWrapper>
                    <div className="projectName">{`${project?.name} (${project?.customer}) - ${project?.people}`}</div>
                    <div className="projectRole">{project?.role}</div>
                    <span>{project?.overview}</span>
                  </ProjectContentWrapper>
                </ProjectWrapper>
                {state.width < 750 && <CustomDivider />}
              </Fragment>
            );
          })}
        </ListProjectWrapper>
      </WorkExperienceWrapper>

      <WorkExperienceWrapper>
        <WorkExperienceHeader>Skills</WorkExperienceHeader>
        <ListSkillsWrapper>
          {state.LIST_SKILLS.map((skill, index) => {
            return (
              <SkillsWrapper key={index} width={state.width}>
                <div className="skillName">{skill.name}</div>
                <ProgressBar
                  overlayClassName="skillPercent"
                  percent={skill.percent}
                />
              </SkillsWrapper>
            );
          })}
        </ListSkillsWrapper>
      </WorkExperienceWrapper>

      <WorkExperienceWrapper>
        <WorkExperienceHeader>Certificates</WorkExperienceHeader>
        <ListProjectWrapper>
          {state.LIST_CERTIFICATES.map((project, index) => {
            return (
              <Fragment key={index}>
                <ProjectWrapper width={state.width}>
                  <TimeWrapper width={state.width}>
                    {`${moment(project?.achieveTime).format("MM/YYYY")} ${
                      project?.expireTime
                        ? `~ ${moment(project?.expireTime).format("MM/YYYY")}`
                        : ""
                    }`}
                  </TimeWrapper>

                  <ProjectContentWrapper className="certInfoWrapper">
                    <div className="projectName">
                      {`${project?.name}`} (
                      <a
                        href={project?.source}
                        target="_blank"
                        rel="noreferrer"
                        className="certLink"
                      >
                        Direct to Cert
                      </a>
                      )
                    </div>
                    <Image src={project?.imageUrl} width={200} height={200} />
                  </ProjectContentWrapper>
                </ProjectWrapper>
                {state.width < 750 && <CustomDivider />}
              </Fragment>
            );
          })}
        </ListProjectWrapper>
      </WorkExperienceWrapper>

      <WorkExperienceWrapper>
        <WorkExperienceHeader>Education And job Career</WorkExperienceHeader>
        <ListProjectWrapper>
          {state.LIST_EDUCATION.map((project, index) => {
            return (
              <Fragment key={index}>
                <ProjectWrapper width={state.width}>
                  <TimeWrapper width={state.width}>
                    {`${moment(project?.timeFrom).format("MM/YYYY")} ~ ${moment(
                      project?.timeTo
                    ).format("MM/YYYY")}`}
                  </TimeWrapper>

                  <ProjectContentWrapper>
                    <div className="projectName">{`${project?.name}`}</div>
                    <div className="projectRole">{project?.role}</div>
                    <div className="careerAdditional">
                      {project?.additional}
                    </div>
                  </ProjectContentWrapper>
                </ProjectWrapper>
                {state.width < 750 && <CustomDivider />}
              </Fragment>
            );
          })}
        </ListProjectWrapper>
      </WorkExperienceWrapper>

      {/* <Button
        type="primary"
        onClick={() => {
          handler.navigate("/test");
        }}
      >
        Contact me now
      </Button> */}
    </HomeContainer>
  );
};

export default HomePage;
