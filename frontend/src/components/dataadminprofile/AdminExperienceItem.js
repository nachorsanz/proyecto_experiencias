import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import Button from '../button/Button';

function AdminExperiencesItem() {
  const [formActivate, setFormActivate] = useState(false);

  return (
    <div className="main">
      <h3>Aqui va lo de dentro de la experiencia</h3>
      <div className="buttons">
        <MdEdit onClick={() => setFormActivate(!formActivate)} />
        <Modal
          show={formActivate}
          onHide={() => setFormActivate(!formActivate)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edita la experiencia</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group>
              <Form.Label>Nombre experiencia</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ubicaccion</Form.Label>
              <Form.Control type="text" placeholder="Apellidos" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" placeholder="..." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" placeholder=" €" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nº Participantes</Form.Label>
              <Form.Control type="text" placeholder="Dirección" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de Inicio</Form.Label>
              <Form.Control type="text" placeholder="Codigo Postal" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha Fin</Form.Label>
              <Form.Control type="text" placeholder="Nombre de Usuario" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Aceptar condiciones de uso</Form.Label>
              <Form.Check type="checkbox" />
            </Form.Group>
            <Button blue>ENVIAR</Button>
          </Form>
        </Modal>

        <GoTrashcan />
      </div>
    </div>
  );
}

export default AdminExperiencesItem;
