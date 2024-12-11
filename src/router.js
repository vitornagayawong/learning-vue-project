import { createRouter,  createWebHistory } from 'vue-router'

//createWebHashHistory
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from './components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from './components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from './components/servicos/Opcoes.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path: '/home',
        alias: '/app',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: //localhost:8080/home/vendas
                [   
                    { path: 'leads', component: Leads, name: 'leads' }, //localhost:8080/home/vendas/leads
                    { path: 'leads/:id', component: Lead, name: 'lead', alias: ['/l/:id', '/pessoas/:id', '/:id' ]}, //localhost:8080/home/vendas/leads/5
                    { path: 'contratos', component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
                    { path: '', component: VendasPadrao, name: 'vendas' }, //localhost:8080/home/vendas/
                ]
            }, 
            { path: 'servicos', component: Servicos, name: 'servicos', children: 
                [
                    { path: ':id', alias: '/s/:id', name: 'servico', components: 
                        {
                            default: Servico,
                            indicadores: Indicadores,
                            opcoes: Opcoes
                        }
                    } //localhost:8080/home/servicos/5
                ]
            }, //localhost:8080/home/servicos
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape
                } 
            }//localhost:8080/home/dashboard
        ]
    },
    {
        path: '/login',
        component: Login
    },
    { path: '/redirecionamento-1', redirect: '/home/servicos'},
    { path: '/redirecionamento-2', redirect: { name: 'leads' } },
    { path: '/redirecionamento-3', redirect: '/home/vendas' },
    { path: '/redirecionamento-4', redirect: { name: 'vendas' } },
    { path: '/redirecionamento-5', redirect: to => {
            console.log(to)
            return { name: 'vendas' }
        } 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes //poderia ser routes somente, js entende assim
})

export default router
