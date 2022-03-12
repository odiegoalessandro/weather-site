import React from "react"
import Head from "next/head"
import { css, Global } from "@emotion/react"
import { CSSReset } from "@chakra-ui/css-reset"

const GlobalStyles: React.FC = ({ children }) => {
  return(
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}/>
      {children}
    </>
  )
}

export default GlobalStyles