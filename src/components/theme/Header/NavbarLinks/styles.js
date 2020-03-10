import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #FFFFFF;
	text-decoration: none;

	&:hover {
		color: #FF9BF1;
	}
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}

	`}
`;
