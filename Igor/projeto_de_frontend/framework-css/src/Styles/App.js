import styled from 'styled-components'
export const Cores = {
  cyan: 'hsl(179, 62%, 43%);',
  brightYellow: 'hsl(71, 73%, 54%);',
  lightGray: 'hsl(204, 43%, 93%);',
  grayishBlue: 'hsl(218, 22%, 67%);',
  white: '#fff;'
}

export const Titulo = styled.h3` 
  color: ${Cores.cyan};
`

export const Titulo2 = styled.h4` 
  color: ${Cores.brightYellow};
`

export const Titulo3 = styled.h5` 
  color: ${Cores.grayishBlue};
`

export const Container = styled.div`
  width:600px;
  height: 160px;
  margin: 0 auto;
  background-color: ${Cores.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const Container2 = styled.div`
  display: flex;
  width:300px;
  height: 400px;
  margin: 0;
  background-color: ${Cores.cyan};
  flex-wrap:wrap ;
`
export const Container3 = styled.div`
  display:flex;
  width:300px;
  height: 400px;
  margin: 0;
  background-color: ${Cores.grayishBlue};
  flex-wrap:wrap ;
`