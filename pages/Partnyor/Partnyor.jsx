import { useState, useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {PARTNER} from 'GraphQL/Queries'
// import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';
import clsx from 'clsx';
import styles from'./style.module.scss'

const Partnyor = ({offsetY}) => {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 

    const {loading, data} = useQuery(PARTNER)

    useEffect(() => {}, [data])
    return (
        <div className={clsx(styles['partners'])}>
            <div className={clsx(styles['partners__content'])}>
                {!loading && (
                    <>
                        <h2>{data.page.partnership_content.block1.title}</h2>
                        <h3>{data.page.partnership_content.block1.subtitle}</h3>
                        <p>{data.page.partnership_content.block1.form.title}</p>
                        <Form className={clsx(styles['form'])}>
                            {/*<Input value={name} onChange={changeName} placeholder='Имя'/>*/}
                            {/*<Input value={contact} onChange={changeContact} placeholder='Контакт' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                            <Button>Написать</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
            <div className={clsx(styles['partners__image1'])} >
                {!loading &&  (
                    <img src={data.page.partnership_content.block1.image.sourceUrl} alt="" />
                )} 
            </div>
        </div>
    );
};

export default Partnyor;