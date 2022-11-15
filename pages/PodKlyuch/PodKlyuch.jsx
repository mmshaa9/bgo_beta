import {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import {PODKLYUCH} from 'GraphQL/Queries'
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';
import clsx from 'clsx'
import styles from './style.module.scss';

const PodKlyuch = () => {
    const {error, loading, data} = useQuery(PODKLYUCH)
    
const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 

    useEffect(() => {
    },[data]);
    return (
        <div className={clsx(styles['pod-klyuch'])}>
            <div className={clsx(styles['pod-klyuch__content1'])}>
                <div className={clsx(styles['pod-klyuch__content1__about'])}>
                {!loading && (
                    <>
                        <h2>{data.page.turnkey_services_content.block1.title}</h2>
                        {data.page.turnkey_services_content.block1.list.split('\n').map((x, key) => <h3 key={key}>{x}</h3>)}
                    </>
                )}
                </div>
                    <div className={clsx(styles['pod-klyuch__content1__image1'])} >
                {!loading &&  (
                    <img src={data.page.turnkey_services_content.block1.image.sourceUrl} alt="" />
                    )}
                    </div>


            </div>

            <div className={clsx(styles['pod-klyuch__content2'])}>
                <div className={clsx(styles['pod-klyuch__content2__about'])}>
                {!loading && (
                    <>
                        <h3>{data.page.turnkey_services_content.block2.title}</h3>
                        <p>{data.page.turnkey_services_content.block2.paragraph1}</p>
                        <p>{data.page.turnkey_services_content.block2.paragraph2}</p>
                        <p>{data.page.turnkey_services_content.block2.paragraph3}</p>
                        <p>{data.page.turnkey_services_content.block2.paragraph4}</p>
                        <ul className={clsx(styles['pod-klyuch__content2__about__list'])}>
                            {data.page.turnkey_services_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
            <div className={clsx(styles['pod-klyuch__content2__form'])}>
                {!loading && (
                    <>
                        <h3>{data.page.turnkey_services_content.block3.title}</h3>
                        <p>{data.page.turnkey_services_content.block3.paragraph1}</p>
                        <h3 className={clsx(styles['pod-kluch__content2__form__title'])}>{data.page.turnkey_services_content.block3.form.title}</h3>
                        <Form className={clsx(styles['form'])}>
                            {/*<Input value={name} onChange={changeName} placeholder='Имя'/>*/}
                            {/*<Input value={contact} onChange={changeContact} placeholder='Контакт' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdcQPbIwbkO6k1cd14jALGsab-uGUQbJ0JzppiwXzbaTHuWkw/viewform">
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

export default PodKlyuch;