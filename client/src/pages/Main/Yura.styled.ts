import styled from 'styled-components'

const TypeWriter = styled.div`
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  font-size: 3.5rem;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid #8ABAD3FF; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 0.5s steps(40, end) forwards,
    blink-caret 0.75s step-end infinite;

  font-weight: 700;
  background: linear-gradient(153deg, #c41680 10%, #e06499 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #8ABAD3FF;
    }
  }
`
const Wrapper = styled.div`
  width: fit-content;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
`

export { TypeWriter, Wrapper }
