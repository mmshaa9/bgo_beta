import { useEffect } from 'react';
import {useQuery} from '@apollo/client';
import {CONTACT} from 'GraphQL/Queries';
import clsx from 'clsx';
import styles from './style.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';

const Contacts = () => {
    const {error, loading, data} = useQuery(CONTACT)
    useEffect(() => {
    }, [data]);

    return (

            <div className={clsx(styles['contact'])}>
                <div className={clsx(styles['contact__block1'])}>
                    <div className={clsx(styles['contact__block1__group'])}>
                            {!loading && (
                                <>
                                    <h5>{data.page.contact.block1.group.title1}</h5>
                                    <h6>{data.page.contact.block1.group.subtitle1}</h6>
                                    <p>{data.page.contact.block1.group.paragraph1}</p>
                                    <h6>{data.page.contact.block1.group.subtitle2}</h6>
                                    <p>{data.page.contact.block1.group.paragraph2}</p>
                                    <h6>{data.page.contact.block1.group.subtitle3}</h6>
                                    <p>{data.page.contact.block1.group.paragraph3}</p>
                                    <h6>{data.page.contact.block1.group.subtitle4}</h6>
                                    <p>{data.page.contact.block1.group.paragraph4}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={clsx(styles['contact__block1__form'])}>
                        {!loading && (
                            <>
                                <h5>{data.page.contact.block1.form.subtitle5}</h5>
                            </>
                        )}
                             {  /*  <Form>
                                    <Input placeholder='Имя'/>
                                    <Input placeholder='Контакт' />
                                    <Input placeholder='Город' />
                                    <Button>Отправить</Button>
                        </Form> */}

                    </div>

            </div>

    )
};


export default Contacts;