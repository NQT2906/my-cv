import {
  AvatarContainer,
  HomeContainer,
  InformationContainer,
  InformationSection,
  InformationWrapper,
  RowInformation,
  SocialNetworkWrapper,
  LabelWrapper,
  ContentWrapper,
} from "./HomePageStyled";
import { useHomePage } from "./useHomePage";

const HomePage = () => {
  const { state } = useHomePage();

  return (
    <HomeContainer>
      <InformationSection>
        <InformationWrapper id="avatarId" width={state.width}>
          <AvatarContainer />
          <InformationContainer>
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
      {Array(100)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              nostrum?
            </div>
          );
        })}
      <div>Experience</div>
      <div>Education</div>
      <div>Skills</div>
    </HomeContainer>
  );
};

export default HomePage;
