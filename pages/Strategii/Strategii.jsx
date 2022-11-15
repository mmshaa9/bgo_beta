import {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import {STRATEGII} from 'GraphQL/Queries'
import Input from 'components/Input'
import Button from 'components/Button'
import Form from 'components/Form';

import clsx from 'clsx';
import styles from './style.module.scss';

const Strategii = () => {
    const {loading, data} = useQuery(STRATEGII)
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['strategii'])}>
            <div className={clsx(styles['strategii__block1'])}>
                <div className={clsx(styles['strategii__block1__content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.strategy_content.block1.title}</h2>
                        <p>{data.page.strategy_content.block1.paragraph1}</p>
                    </>
                )}
                </div>
                <div className={clsx(styles['strategii__block1__image1'])} >
                    {!loading &&  (
                        <img src={data.page.strategy_content.block1.image.sourceUrl} alt="" />
                    )}
                </div>
            </div>

            <div className={clsx(styles['strategii__block2'])}>
                <div className={clsx(styles['strategii__block2__content2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block2.title}</h3>
                        <p>{data.page.strategy_content.block2.paragraph1}</p>
                        <ul className={clsx(styles['strategii__block2__content2__list'])}>
                            {data.page.strategy_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <h4>{data.page.strategy_content.block2.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            {/*<Input placeholder='Имя'/>*/}
                            {/*<Input placeholder='Контакт'/>*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
                <div className={clsx(styles['strategii__block2__content3'])}>
                    {!loading && (
                        <>
                            <h3>{data.page.strategy_content.block3.title}</h3>
                            <p>{data.page.strategy_content.block3.paragraph1}</p>
                            <p>{data.page.strategy_content.block3.paragraph2}</p>
                            <p>{data.page.strategy_content.block3.paragraph3}</p>
                            <p>{data.page.strategy_content.block3.paragraph4}</p>
                        </>
                    )}
                </div>
            </div>

            <div className={clsx(styles['strategii__block3'])}>
                <div className={clsx(styles['strategii__block3__content4'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block4.title}</h3>
                        <p>{data.page.strategy_content.block4.paragraph1}</p>
                        <p>{data.page.strategy_content.block4.paragraph2}</p>
                        <h4>{data.page.strategy_content.block4.form.title}</h4>
                        <Form className={clsx(styles['form'])}>
                            {/*<Input placeholder='Имя'/>*/}
                            {/*<Input placeholder='Контакт'/>*/}
                           <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
                <div className={clsx(styles['strategii__block3__content5'])}>
                    {!loading && (
                        <>
                            <h3>{data.page.strategy_content.block5.title}</h3>
                            <p>{data.page.strategy_content.block5.paragraph1}</p>
                            <p>{data.page.strategy_content.block5.paragraph2}</p>
                            <p>{data.page.strategy_content.block5.paragraph3}</p>
                            <p>{data.page.strategy_content.block5.paragraph4}</p>
                            <p>{data.page.strategy_content.block5.paragraph5}</p>
                            <p>{data.page.strategy_content.block5.paragraph6}</p>
                        </>
                    )}
                </div>
            </div>

            <div className={clsx(styles['strategii__block4'])}>
                <div className={clsx(styles['strategii__block4__content6'])}>
                {!loading && (
                    <>
                        <h3>{data.page.strategy_content.block6.title}</h3>
                        <p>{data.page.strategy_content.block6.paragraph1}</p>
                        <p>{data.page.strategy_content.block6.paragraph1}</p>
                        <ul className={clsx(styles['strategii__block4__content6__list'])}>
                            {data.page.strategy_content.block6.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
                <div className={clsx(styles['strategii__block4__content7'])}>
                    {!loading && (
                        <>
                            <h3>{data.page.strategy_content.block7.title}</h3>
                            <p>{data.page.strategy_content.block7.paragraph1}</p>
                            <p>{data.page.strategy_content.block7.paragraph2}</p>
                            <h4>{data.page.strategy_content.block7.form.title}</h4>
                            <Form className={clsx(styles['form'])}>
                                {/*<Input placeholder='Имя'/>*/}
                                {/*<Input placeholder='Контакт'/>*/}
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

export default Strategii;