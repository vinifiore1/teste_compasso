import React,{useState, useContext} from 'react';

import { FiSearch } from 'react-icons/fi';

import {HeaderSection,HeaderTitle,HeaderInputContainer,HeaderInput,HeaderSearchButton} from './styles';

import client from '../../services/client';

import { context } from '../../context';

const Header = () => {

    const ctx = useContext(context);
    const [search, setSearch] = useState('');

    async function getUserData(){
        if(search === ''){
            alert('O campo de usuario deve ser preenchido!')
        }
        try{
            const response = await client.get(`/${search}`);
            const repos = await client.get(`/${search}/repos`);
            const starred = await client.get(`/${search}/starred`);

            ctx.setUserData(response.data);
            ctx.setRepos(repos.data);
            ctx.setStarred(starred.data);
;
        } catch(err){
            console.log(err)
        }

    }

    return( 
            <HeaderSection>
                <HeaderTitle>Usuário GitHub</HeaderTitle>
                <HeaderInputContainer>
                    <HeaderInput value = {search} onChange={e => setSearch(e.target.value)}/>
                    
                    <HeaderSearchButton onClick={getUserData}>
                        <FiSearch size={15} />
                    </HeaderSearchButton>
                </HeaderInputContainer>
            </HeaderSection>
        );
}

export default Header;