import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client'
import {EARTH} from 'GraphQL/Queries'
 import Input from 'components/Input';
import Button from 'components/Button';
 import InputCheckbox from 'components/InputCheckbox';
import Form from 'components/Form';
import clsx from 'clsx'
import styles from './style.module.scss'

const Zemly = () => {
    const {loading, data} = useQuery(EARTH)

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['zemlya'])}>
            <div className={clsx(styles['zemlya__block__image'])} >
                {!loading &&  (
                        <img src={data.page.earth_content.image.sourceUrl} alt="image of land" />
                )}
            </div>
            <div className={clsx(styles['zemlya__block__content'])}>
                {!loading && (
                    <>

                        <ul className={clsx((styles['zemlya__block__content__list']))}>
                            {data.page.earth_content.paragraph1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>

                      <Form className={clsx(styles['zemlya__block__content__form'])}>
                            {/*{Object.entries(data.page.earth_content.form).filter(key => /checkbox/.test(key)).map(([_, value], key) => <InputCheckbox key={key}>{value}</InputCheckbox>)}*/}
                            {/*<Input value={name} onChange={changeName} placeholder='Имя'/>*/}
                            {/*<Input value={contact} onChange={changeContact} placeholder='Контакт' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScp4oWxukOqIdZcIoh6byduM5W1YHe91vEK94QmULNGVw-4WQ/viewform">
                                <Button>Подобрать</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Zemly;