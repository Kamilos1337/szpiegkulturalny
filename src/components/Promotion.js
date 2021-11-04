import React, { useState,useEffect, useContext} from 'react';
import trackerApi from '../api/tracker';
import {Input, Label, Menu, Dropdown, Form, Select, Button, Icon} from 'semantic-ui-react'
import {Context as BlogContext} from '../context/EventContext';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Promotion = ()=> {
    const updatePromotion = async(myJson)=> {
        for (let i = 0; i < myJson.length; i++) {
            await trackerApi.post('/updatePromotion', {myJson:myJson[i]}).then(res => console.log(res)).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
        }
    }

    const [activeItem, setActiveItem] = useState('inbox')
    const history = useHistory();
    const handleClick = (event) => history.push('/b',{event});
    const [sortBy, setSortBy] = useState('')
    const {state, fetchEvents} = useContext(BlogContext);
    const [searchQuery, setSearchQuery] = React.useState('');
    let arr = [];
    const space = "\n"
    const [theArray, setTheArray] = useState([]);
    const cityOptions = [
        { key: 'KR', text: 'Kraków', value: 'Krakow' },
        { key: 'WA', text: 'Warszawa', value: 'Warszawa' },
        { key: 'PO', text: 'Poznań', value: 'Poznan' },
    ]
/*    const chooseCity = (clicked)=>{
        if(clicked==='on'){
            return (
                <Form.Input fluid label='First name' placeholder='First name' />
            )
        }
    }*/
    useEffect(() => {
        fetchEvents();
    }, []);
    return (
        <Menu vertical style={{width:'100%'}}>
            <Menu.Item>
                <Menu text>
                    <Menu.Item header>Search By</Menu.Item>
                    <Menu.Item
                        name='Tytuł'
                        active={sortBy === 'title'}
                        onClick={(e, {name}) => setSortBy('title')} //pozmieniac tak jak tutaj
                    />
                    <Menu.Item
                        name='PodTytuł'
                        active={sortBy === 'PodTytuł'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Data'
                        active={sortBy === 'Data'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Godzina'
                        active={sortBy === 'Godzina'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Cena'
                        active={sortBy === 'Cena'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Status'
                        active={sortBy === 'status'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Nazwa lokalizacji'
                        active={sortBy === 'Nazwa lokalizacji'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Ulica lokalizacji'
                        active={sortBy === 'Ulica lokalizacji'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Kod pocztowy lokalizacji'
                        active={sortBy === 'Kod pocztowy lokalizacji'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='SEOType lokalizacji'
                        active={sortBy === 'SEOType lokalizacji'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Długość geograficzna'
                        active={sortBy === 'Długość geograficzna'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Szerokość geograficzna'
                        active={sortBy === 'Szerokość geograficzna'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Nazwa ogranizatora'
                        active={sortBy === 'Nazwa ogranizatora'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Link organizatora'
                        active={sortBy === 'Link organizatora'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                    <Menu.Item
                        name='Kategoria'
                        active={sortBy === 'Kategoria'}
                        onClick={(e, {name}) => setSortBy(name)}
                    />
                </Menu>
                <Input icon='search' placeholder='Search events...' onChange={e=>{setSearchQuery(e.target.value);console.log(e.target.value)}}/>
            </Menu.Item>
            {
                state
                    .filter(item => searchQuery == ''||item[sortBy]===searchQuery)
                    .map((item,i) => (

                        <Menu.Item
                            key={i}
                            name={'updates'}
                            active={activeItem === 'updates'}
  /*                          onClick={()=>handleClick(item)}*/
                        >
                            <div>Link : <span style={{color:"blue",fontWeight: "bold"}}>{item.link}</span></div><div>{space}Tytuł : <span style={{color:"blue",fontWeight: "bold"}}>{item.title}</span></div><div>
                                Podtytuł : <span style={{color:"blue",fontWeight: "bold"}}>{item.subtitle}</span></div><div>Data : <span style={{color:"blue",fontWeight: "bold"}}>{new Date(item.data).toISOString().split('T')[0]}</span></div><div>
                                Godzina : <span style={{color:"blue",fontWeight: "bold"}}>{new Date(item.hour).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</span></div><div>
                                Cena :  <span style={{color:"blue",fontWeight: "bold"}}>{item.price}</span></div><div> Status : <span style={{color:"blue",fontWeight: "bold"}}>{item.status}</span></div><div> Nazwa Lokalizacji : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.name}</span></div><div>
                                Ulica Lokalizacji : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.street}</span></div><div> Kod pocztowy Lokalizacji : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.postalCode}</span></div><div>
                                Miasto Lokalizacji :<span style={{color:"blue",fontWeight: "bold"}}>{item.location.city}</span></div><div> Zdjecie lokalizacji : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.picture}</span></div><div>
                                SEOType Lokalizacji : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.SEOType}</span></div><div>  Długość geograficzna : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.longitude}</span></div><div>
                                Szerokość geograficzna : <span style={{color:"blue",fontWeight: "bold"}}>{item.location.latitude}</span></div><div>
                                Zdjecie ogolne : <span style={{color:"blue",fontWeight: "bold"}}>{item.picture}</span></div><div> Kolor : <span>{item.color}</span></div><div>  Kategoria : <span style={{color:"blue",fontWeight: "bold"}}>{item.category}</span></div>
                            <Form.Group grouped>
                                <br></br>
                                <label>Gdzie promować</label>
                                <Form.Field onClick={() => {
                                    if (theArray.some(code => code.event._id === item._id&&code.promotionType==='Strona Główna')){
                                        setTheArray(theArray.filter(value =>value.event._id!==item._id
                                        ));

                                    } else {
                                        /*arr.push({event: item, promotionType: 'Strona Główna'})*/
                                        setTheArray(prevArray => [...prevArray,{event: item, promotionType: 'Strona Główna'}])

                                    }
                                }} label='Strona Główna' control='input' type='checkbox' />
                                <Form.Field onClick={()=>{
                                    if (theArray.some(code => code.event._id === item._id&&code.promotionType===item.location.locationCity)) {
                                            setTheArray(theArray.filter(value =>value.event._id!==item._id
                                            ));
                                        }

                                    else{
                                        /*arr.push({event:item,promotionType:item.location.locationCity})*/
                                        setTheArray(prevArray => [...prevArray,{event: item, promotionType: item.location.locationCity}])
                                    }}} label='Strona Miasta' control='input' type='checkbox' />

                            </Form.Group>
                        </Menu.Item>
                    ))
            }
            <Button type='submit' onClick={()=>updatePromotion(arr)}>Wyślij</Button>
        </Menu>

    )
}
export default Promotion;
