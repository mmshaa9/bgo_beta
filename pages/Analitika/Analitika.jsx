import {useState,useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {ANALITIKA} from 'GraphQL/Queries'

import { Swiper, SwiperSlide } from "swiper/react";

import Form from 'components/Form';
import InputCheckbox from 'components/InputCheckbox';
import Input from 'components/Input';
import Button from 'components/Button';

import clsx from "clsx";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import SwiperWrapStyle from './SwiperWrapStyle'

const Analitika = () => {
    const { loading, data} = useQuery(ANALITIKA)
    
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName( prev=> e.target.value)
    const changeContact = (e) => setContact(prev => e.target.value) 
    useEffect(() => {
    },[data]);
    return (
        <div className={clsx(styles['analitika'])}>
            <div className={clsx(styles['analitika__block'])}>
                {!loading && (
                    <>
                        <h2>{data.page.analytics_content.block1.title}</h2>
                        <h3>{data.page.analytics_content.block1.subtitle}</h3>
                        <div className={clsx(styles['analitika__block__group'])}>
                        <div className={clsx(styles['analitika__block__group__slider_container'])}>
                            <SwiperWrapStyle >
                                <Swiper direction={"vertical"} pagination={{clickable: true}} modules={[Pagination]} className="analitika__block__slider_container__mySwiper">
                                    {Object.entries(data.page.analytics_content.block1.slider).filter(key => /slide/.test(key)).map(([_, value], key) =>
                                        <SwiperSlide key={key}><p dangerouslySetInnerHTML={{__html: value }}/>
                                        </SwiperSlide>)}
                                </Swiper>
                            </SwiperWrapStyle>



                        </div>
                            <div className={clsx(styles['analitika__block__group__image1'])} >
                                {!loading &&  (
                                    <img src={data.page.analytics_content.block1.image.sourceUrl} alt="" />
                                )}
                            </div>
                        </div>

                    </>
                )}
                
            </div>


            <div  className={clsx(styles['analitika__content'])} >
                {!loading &&  (
                    <div className={clsx(styles['analitika__content__image2'])}>
                        <img src={data.page.analytics_content.form.image.sourceUrl} alt="" />
                    </div>
                )}



            <div className={clsx(styles['analitika__content__form'])}>
                {!loading && (
                  <>
                       <h4>{data.page.analytics_content.form.title}</h4>

                       
                        <Form className={clsx(styles['form'])} >
                            {/*{Object.entries(data.page.analytics_content.form).filter(key => /checkbox/.test(key)).map(([_, value], key) => <InputCheckbox key={key}>{value}</InputCheckbox>)}*/}

                            {/*<Input value={name} onChange={changeName} placeholder='Имя'/>*/}
                            {/*<Input value={contact} onChange={changeContact} placeholder='Контакт' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
            </div>

        </div>
    );
};

export default Analitika;