import type { NextPage } from 'next'
import Button from '../components/button/Button'
import Form from '../components/form/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Title from '../components/Title'
import UseClientes from '../hooks/UseClientes'


const Home: NextPage = () => {
  const {
    saveClient,
    clientDel,
    InsertClient,
    view, setView, clientes, clientEdit, cliente } = UseClientes()

  return (
    <Layout>
      <Title title='Cadastro'> </Title>
      <div className={` rounded-2xl border-red-500  bg-gradient-to-tr from-gray-300-600
       to-gray-200 m-40  bg-state-300 flex min-h-40 flex-col items-center justify-center py-2
        `}>

        {view == 'table' ?
          (
            <>
              <div className='flex justify-end w-full'>
                <Button onClick={() => InsertClient('form')} className="m-4">New Client</Button>
              </div>

              <Table clients={clientes}
                clientEdit={clientEdit}
                clientDel={clientDel}
              />
            </>
          )
          :
          <Form cliente={cliente}
            newcliente={saveClient}
            cancel={() => setView('table')}
          ></Form>
        }





      </div>

    </Layout >









  )
}

export default Home
