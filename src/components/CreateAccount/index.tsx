import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { FaCheck, FaLock, FaTimes, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { User } from "../../entities/User";
import { saveUser } from "../../services/UserService";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";

export function CreateAccount() {
  const navigate = useNavigate();
  const { showNotification } = useToast();

  function handleSubmitForm(values: FormikValues) {
    const user = new User(
      null,
      values.name,
      values.username,
      values.password,
      []
    ).toJson();

    saveUser(user).then(() => {
      showNotification('success', 'Cadastrado com Sucesso.')
      navigate('/login')
    }).catch((e) => {
      showNotification('danger', e.response.data.message)
    })
  }

  return (
    <div className="w-full  h-screen flex items-center justify-center">
      <Box className="w-full p-10 max-w-sm bg-default-800">
        <Text className="mb-4 flex" size="sm">
          Criar Conta
        </Text>

        <Formik
          enableReinitialize
          initialValues={{
            name: "",
            username: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().nullable().required("Informe um nome"),
            username: Yup.string().nullable().required("Informe um username"),
            password: Yup.string().nullable().required("Informe uma senha"),
            confirmPassword: Yup.string().nullable().required("Informe novamente a senha")
            .oneOf([Yup.ref('password')], 'Senhas informadas são diferentes'),
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
              <div className="flex flex-col gap-3">
                <TextField
                  name="name"
                  autoComplete="off"
                  onChange={handleChange}
                  size="lg"
                  placeholder="Nome Completo"
                  error={Boolean(touched.name && errors.name)}
                  helperText={errors.name}
                />
              </div>
              <div className="flex flex-col mt-14 gap-3">
                <TextField
                  name="username"
                  onChange={handleChange}
                  size="lg"
                  icon={<FaUserAlt />}
                  placeholder="Usuário"
                  autoComplete="off"
                  error={Boolean(touched.username && errors.username)}
                  helperText={errors.username}
                />
                <TextField
                  size="lg"
                  name="password"
                  autoComplete="off"
                  icon={<FaLock />}
                  onChange={handleChange}
                  type="password"
                  placeholder="Senha"
                  error={Boolean(touched.password && errors.password)}
                  helperText={errors.password}
                />
                <TextField
                  size="lg"
                  autoComplete="off"
                  name="confirmPassword"
                  icon={<FaLock />}
                  onChange={handleChange}
                  type="password"
                  placeholder="Confirmar Senha"
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                />
              </div>
              <footer className="flex flex-col gap-2 mt-6">
                <Button
                  type="submit"
                  size="lg"
                  color="primary"
                  leftIcon={<FaCheck />}
                  fullWidth
                  //disabled={!values.name || !values.username || !values.password || !values.confirmPassword || (values.password !== values.confirmPassword)}
                >
                  Inscrever-se
                </Button>
                <Button
                  size="xs"
                  variant="text"
                  color="secondary"
                  leftIcon={<FaTimes />}
                  fullWidth
                  onClick={() => navigate("/login")}
                >
                  Cancelar
                </Button>
              </footer>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}
