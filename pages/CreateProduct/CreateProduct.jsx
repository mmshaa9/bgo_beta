import {useEffect} from 'react'
import {useQuery} from '@apollo/client'
import {PRODUCT} from 'GraphQL/Queries'
import Form from 'components/Form'
import Button from 'components/Button';
import Input from 'components/Input';
import clsx from 'clsx'
import styles from './style.module.scss'

const CreateProduct = ({}) => {
    const {error, loading, data} = useQuery(PRODUCT)
    useEffect(()=>{}, [data])
    return (
        <div className={clsx(styles['product'])}>
            <div className={clsx(styles['product__block1'])}>
                <div className={clsx(styles['product__block1__content1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.product_creation_content.block1.title}</h2>
                        <h4>{data.page.product_creation_content.block1.subtitle}</h4>
                        <ul className={clsx((styles['product__block1__content1__list1']))}>
                            {data.page.product_creation_content.block1.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                    </>
                )}
            </div>
                <div className={clsx(styles['product__block1__image1'])} >
                    {!loading &&  (
                        <img src={data.page.product_creation_content.block1.image.sourceUrl} alt="" />
                    )}
                </div>
            </div>

            <div className={clsx(styles['product__block2'])}>
            <div className={clsx(styles['product__block2__image2'])} >
                    {!loading &&  (
                        <img src={data.page.product_creation_content.block2.image.sourceUrl} alt="" />
                    )}
            </div>
            <div className={clsx(styles['product__block2__content2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block2.title}</h3>
                        <ul className={clsx(styles['product__block2__content2__list2'])}>
                            {data.page.product_creation_content.block2.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        {<h4>{data.page.product_creation_content.block2.form.title}</h4>}
                        <Form>
                            {<Input placeholder='Имя'/>}
                            {<Input placeholder='Контакт' />}
                            {<Input placeholder='Город' />}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить кейсы</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
        </div>

            <div className={clsx(styles['product__block3'])}>
            <div className={clsx(styles['product__block3__image3'])} >
                {!loading &&  (
                    <img src={data.page.product_creation_content.block3.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['product__block3__content3'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block3.title}</h3>
                        <ul className={clsx((styles['product__block3__content3__list3']))}>
                            {data.page.product_creation_content.block3.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        {<h4>{data.page.product_creation_content.block3.form.title}</h4>}
                        <Form>
                            {<Input placeholder='Имя'/>}
                            {<Input placeholder='Контакт' />}
                            {<Input placeholder='Город' />}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Запросить портфолио</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
        </div>

            <div className={clsx(styles['product__block4'])}>
            <div className={clsx(styles['product__block4__image4'])} >
                {!loading &&  (
                    <img src={data.page.product_creation_content.block4.image.sourceUrl} alt="" />
                )}
            </div>
            <div className={clsx(styles['product__block4__content4'])}>
                {!loading && (
                    <>
                        <h3>{data.page.product_creation_content.block4.title}</h3>
                        <ul className={clsx(styles['product__block4__content4__list4'])}>
                            {data.page.product_creation_content.block4.list.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        {<h4>{data.page.product_creation_content.block4.form.title}</h4>}
                        <Form>
                            {/*<Input placeholder='Имя'/>*/}
                            {/*<Input placeholder='Контакт' />*/}
                            {/*<Input placeholder='Город' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Получить презентацию</Button>
                            </a>
                        </Form>
                    </>
                )}
            </div>
        </div>
        </div>
    );
};

export default CreateProduct;