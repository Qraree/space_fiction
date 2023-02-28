import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './ModalWindow.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { v4 as uuidv4 } from 'uuid';
import { addNewRocket, hideModal } from '@/redux/features/rocket/rocketSlice';
import axios from 'axios';

const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const [uploadedFile, setUploadedFile] = useState<string>('');
  const [file, setFile] = useState<string | Blob>('');

  const countryId = useAppSelector((state) => state.rocket.currentCountryId);

  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    const url = 'http://localhost:5000/rockets';
    // formData.append('id', uuidv4().replace(/\D/g, ''));
    formData.append('id', '11');
    formData.append('name', name);
    formData.append('img', file);
    formData.append('rocketCountryId', countryId.toString());
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => console.log(response.data));
    dispatch(hideModal());
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
          <label>Rocket Name</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Rocket Picture</label>
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
