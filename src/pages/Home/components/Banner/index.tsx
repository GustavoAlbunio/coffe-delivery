import {
  Coffee as CoffeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { BannerContainer, Differential, Differentials, Main } from './styles'

import mainImg from '../../../../assets/home.svg'

export function Banner() {
  return (
    <BannerContainer>
      <Main>
        <main>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Differentials>
            <section>
              <Differential differentialColor="yellowDark">
                <ShoppingCart weight="fill" />
                Compra simples e segura
              </Differential>
              <Differential differentialColor="yellow">
                <Timer weight="fill" />
                Entrega rápida e rastreada
              </Differential>
            </section>

            <section>
              <Differential differentialColor="gray">
                <Package weight="fill" />
                Embalagem mantém o café intacto
              </Differential>
              <Differential differentialColor="purple">
                <CoffeIcon weight="fill" />O café chega fresquinho até você
              </Differential>
            </section>
          </Differentials>
        </main>
        <img src={mainImg} alt="Copo de café" />
      </Main>
    </BannerContainer>
  )
}
