import styled from 'styled-components'
export const Cores = {
    darkCyan: 'hsl(158, 36%, 37%);',
    Cream: 'hsl(30, 38%, 92%);',
    veryDarkBlue: 'hsl(212, 21%, 14%);',
    darkGrayishBlue: 'hsl(228, 12%, 48%);',
    white: '#fff;'


}

export const Titulo = styled.h3` 
  color: ${Cores.darkGrayishBlue};
`

export const Titulo2 = styled.h2` 
  color: ${Cores.brightYellow};
`

export const Titulo3 = styled.h5` 

  color: ${Cores.darkGrayishBlue};
`

export const Price = styled.h1`
  color: ${Cores.darkCyan}
`

export const Price2 = styled.p`
  color: ${Cores.darkGrayishBlue}
`

export const Submit = styled.button`
  background-color: ${Cores.darkCyan};
  border-style: none;
  height: 40px;
  border-radius: 10px;
  width: 220px;
  color: ${Cores.white};
`

export const Container = styled.div`
  width:600px;
  height: 160px;
  margin: 0 auto;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
