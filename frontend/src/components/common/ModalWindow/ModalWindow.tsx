import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hideModal, updateRockets } from '@/redux/features/rocket/rocketSlice';
import { randomInIntervalFloor } from '@/helpers/random';
import styles from './ModalWindow.module.scss';
import { MODAL_MODE } from '@/constants/rockets';

const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [file, setFile] = useState<string | Blob>('');

  const { currentCountryId, modalMode } = useAppSelector(
    (state) => state.rocket,
  );

  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    const url = `http://localhost:5000/rockets${
      modalMode === MODAL_MODE.ROCKET ? `` : '-country'
    }`;
    console.log(url);
    if (modalMode === MODAL_MODE.ROCKET) {
      formData.append('id', randomInIntervalFloor(15, 2147483647).toString());
      formData.append('name', name);
      formData.append('img', file);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formData.append('rocketCountryId', currentCountryId.toString());
    } else {
      formData.append('name', name);
      formData.append('flag', file);
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => console.log(response.data));
    dispatch(hideModal());
    window.location.reload();
    // setTimeout(() => {
    //   dispatch(updateRockets());
    // }, 200);
  }

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileName = e.target.value.slice(12);
    setUploadedFile(fileName);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFile(e.target.files[0]);
  };

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button onClick={handleCloseModal} className={styles.close}>
          x
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          {modalMode === MODAL_MODE.ROCKET ? (
            <label>Rocket Name</label>
          ) : (
            <label>Country Name</label>
          )}
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {modalMode === MODAL_MODE.ROCKET ? (
            <label>Rocket Picture</label>
          ) : (
            <label>Country flag</label>
          )}
          <div className={styles.uploadFileWrapper}>
            <label htmlFor="file-upload" className={styles.fileLabel}>
              Upload picture
            </label>
            <input id="file-upload" type="file" onChange={handleChangeFile} />
            {uploadedFile ? <p>{uploadedFile}</p> : null}
          </div>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
