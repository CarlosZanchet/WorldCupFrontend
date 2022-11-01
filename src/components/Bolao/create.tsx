import { Button, ButtonGroup, Heading, TextField, useToast } from "coheza-ui";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdPublic } from 'react-icons/md'
import { MdLock } from 'react-icons/md'
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { Bolao } from "../../entities/Bolao";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { saveBolao } from "../../services/BolaoService";

export function CreateBolao() {

  const { showNotification } = useToast();

  const [bolao, setBolao] = useState<Bolao>({} as Bolao)
  const [type, setType] = useState<"private" | "public">('public')

  function handleSalvar() {
    showNotification('success', 'Bolão salvo com sucesso.')
  }

  function handleSubmitForm(values: FormikValues) {
    const user = getUsuarioLogadoCookie();
    const newBolao: Bolao = new Bolao(null, values.name, values.url_image, user, new Date(), [], type)
    
    saveBolao(newBolao).then((response) => {
      setBolao(response.data)
      showNotification('success', 'Bolão cadastrado com sucesso.')
    }).catch(() => {
      showNotification('danger', 'Houve um erro ao cadastrar o bolão.')
    })
  }

  return (
    <div>
      <Heading>Cadastrar Bolão</Heading>
      <div className="mt-5">
      <Formik
          enableReinitialize
          initialValues={{
            id: bolao?.id ? bolao?.id : null,
            name: bolao?.name ? bolao?.name : "",
            url_image: bolao?.url_image ? bolao?.url_image : "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().nullable().required("Informe um nome"),
          })}
          onSubmit={handleSubmitForm}
        >
          {({
            errors,
            handleChange,
            handleSubmit,
            touched,
            setFieldValue,
            values,
          }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField name="name" onChange={handleChange} placeholder="Nome do Bolão" label="Nome do Bolão" />
          <TextField name="url_image" onChange={handleChange} placeholder="URL Imagem Bolão" label="URL Imagem Bolão" />
          <ButtonGroup>
            <Button color="primary" onClick={() => setType('private')} variant={type === 'private' ? 'solid' : 'text'} leftIcon={<MdLock />}>Privado</Button>
            <Button color="primary" onClick={() => setType('public')} variant={type === 'public' ? 'solid' : 'text'} leftIcon={<MdPublic />}>Público</Button>
          </ButtonGroup>
          <footer>
            <Button type="submit" leftIcon={<FaCheck />} color="primary">Salvar</Button>
          </footer>
        </form>
        )}
        </Formik>
      </div>
    </div>
  )
}