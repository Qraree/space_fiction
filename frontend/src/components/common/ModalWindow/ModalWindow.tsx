import React, {FormEvent, useState} from 'react';
import styles from './ModalWindow.module.scss';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {addNewRocket, hideModal} from '@/redux/features/rocket/rocketSlice';

const ModalWindow = () => {
    const dispatch = useAppDispatch();
    const countryName = useAppSelector(state => state.rocket.currentCountryName);

    const [input, setInput] = useState({
        img: '',
        title: ''
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newRocket = {
            img: input.img,
            title: input.title,
            countryName: countryName
        };
        dispatch(addNewRocket(newRocket));
    }

    const handleCloseModal= () => {
        dispatch(hideModal());
    };

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <button onClick={handleCloseModal} className={styles.close}>
                    x
                </button>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Rocket Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={input.title}
                        onChange={(e) => setInput({...input, title: e.target.value})}
                    />
                    <label>Rocket Picture</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={input.img}
                        onChange={(e) => setInput({...input, img: e.target.value})}
                    />
                    <button type="submit" className={styles.submit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;
