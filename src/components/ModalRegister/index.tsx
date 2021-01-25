import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './styles.css';

export interface Props {
  onClose: () => void
}

const contract_text = `Contrary to popular belief, Lorem Ipsum is not simply random
text. It has roots in a piece of classical Latin literature from
45 BC, making it over 2000 years old. Richard McClintock, a
Latin professor at Hampden-Sydney College in Virginia, looked up
one of the more obscure Latin words, consectetur, from a Lorem Ipsum
passage, and going through the cites of the word in classical literature,
discovered the undoubtable source. Lorem Ipsum comes from sections
1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
(The Extremes of Good and Evil) by Cicero, written in 45 BC.
This book is a treatise on the theory of ethics, very popular
during the Renaissance. The first line of Lorem Ipsum, "Lorem
ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is
reproduced below for those interested. Sections 1.10.32 and
1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
reproduced in their exact original form, accompanied by English
versions from the 1914 translation by H. Rackham.`;

const ModalRegister: React.FC<Props> = ({ onClose }: Props) => {
  const [collaborator, setCollaborator] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [photoLocation, setPhotoLocation] = useState('');
  const [dateRegister, setDateRegister] = useState('');
  const [photo, setPhoto] = useState<Blob | null>(null);
  const [signature, setSignature] = useState(false);
  const [collaboratorError, setCollaboratorError] = useState(false);
  const [photoNameError, setPhotoNameError] = useState(false);
  const [photoLocationError, setPhotoLocationError] = useState(false);
  const [dateRegisterError, setDateRegisterError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    setCollaboratorError(false);
  }, [collaborator]);

  useEffect(() => {
    setPhotoNameError(false);
  }, [photoName]);

  useEffect(() => {
    setPhotoLocationError(false);
  }, [photoLocation]);

  useEffect(() => {
    setDateRegisterError(false);
  }, [dateRegister]);

  useEffect(() => {
    setPhotoError(false);
  }, [photo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const fileUploaded = (target.files as FileList)[0];
    setPhoto(fileUploaded);
  };

  const handleCheckSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignature(event.target.checked);
  };

  const handleSubmit = async () => {
    if (collaborator) {
      if (photoName) {
        if (photoLocation) {
          if (dateRegister) {
            if (photo) {
              if (signature) {
                const formData = new FormData();

                formData.append('collaborator', collaborator);
                formData.append('photo_name', photoName);
                formData.append('photo_location', photoLocation);
                formData.append('register_date', dateRegister);
                formData.append('signature', String(signature));
                formData.append('photo', photo);

                const response = await api.post('users', formData)
                  .then((resp) => resp.data)
                  .catch(() => {
                    onClose();
                    toast.error('Falha ao realizar o registro.');
                  });

                if (response) {
                  onClose();
                  toast.success('Registro realizado com sucesso');
                }
              } else {
                toast.error('Necessário aceitar o contrato');
              }
            } else {
              setPhotoError(true);
            }
          } else {
            setDateRegisterError(true);
          }
        } else {
          setPhotoLocationError(true);
        }
      } else {
        setPhotoNameError(true);
      }
    } else {
      setCollaboratorError(true);
    }
  };

  return (
    <section className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div className="title">
            <h3>Cadastro</h3>
          </div>
          <div className="closed" onClick={onClose}>
            <button type="button" className="modal_close">X</button>
          </div>
        </div>

        <div className="modal-form">
          <form>
            <div className="input-group">
              <div className="inputs">
                <label htmlFor="Collaborator">Nome do colaborador: </label>
                <input
                  type="text"
                  id="Collaborator"
                  name="collaborator"
                  aria-label="collaborator input"
                  placeholder="Insira seu nome"
                  value={collaborator}
                  onChange={(e) => setCollaborator(e.target.value)}
                />
                {collaboratorError
                  && <span className="error">Campo Obrigatório!</span>}
              </div>
              <div className="inputs">
                <label htmlFor="PhotoName">Nome da foto: </label>
                <input
                  type="text"
                  id="PhotoName"
                  name="photoName"
                  placeholder="Insira o nome da foto"
                  aria-label="photoName input"
                  value={photoName}
                  onChange={(e) => setPhotoName(e.target.value)}
                />
                {photoNameError
                  && <span className="error">Campo Obrigatório!</span>}
              </div>
            </div>
            <div className="input-group">
              <div className="inputs">
                <label htmlFor="Location">Local da foto: </label>
                <input
                  type="text"
                  id="Location"
                  name="photoLocation"
                  aria-label="photoLocation input"
                  placeholder="Insira o local da foto"
                  value={photoLocation}
                  onChange={(e) => setPhotoLocation(e.target.value)}
                />
                {photoLocationError
                  && <span className="error">Campo Obrigatório!</span>}
              </div>
              <div className="inputs">
                <label htmlFor="DateRegister">Data de registro: </label>
                <input
                  type="date"
                  id="DateRegister"
                  aria-label="dateRegister input"
                  name="dateRegister"
                  value={dateRegister}
                  onChange={(e) => setDateRegister(e.target.value)}
                />
                {dateRegisterError
                  && <span className="error">Campo Obrigatório!</span>}
              </div>
            </div>
            <div className="file">
              <label htmlFor="Photo">Anexar Foto: </label>
              <input
                type="file"
                id="Photo"
                name="photo"
                aria-label="photo file"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
              {photoError
                && <span className="error">Campo Obrigatório!</span>}
            </div>

            <div className="contract">
              <label htmlFor="Contract">Termos</label>
              <textarea
                id="Contract"
                name="contract-readonly"
                rows={10}
                cols={50}
                disabled
                aria-label="contract text"
                value={contract_text}
              />
              <div className="signature">
                <input type="checkbox" aria-label="signature input" onChange={handleCheckSignature} />
                <span>Eu li e concordo com os termos</span>
              </div>
            </div>
          </form>
        </div>
        <div className="action" onClick={handleSubmit}>
          <button type="button" className="submit">Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default ModalRegister;
