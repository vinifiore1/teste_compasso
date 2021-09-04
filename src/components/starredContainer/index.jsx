import {Section,Title,ListOfReposContainer,Repo} from './styles';

const StarredContainer = props => {
    return (
        <Section>
            <Title>Favoritos de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.starred).map(starred => (
                    <Repo onClick={() => window.location.href(starred?.html_url)} key={starred?.id}>
                        <h2>{starred?.name}</h2>
                        <p>{starred?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default StarredContainer;