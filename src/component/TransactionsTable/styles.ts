import styled from 'styled-components'

export const Container = styled.header`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.3rem;

        th {
            color: var(--text-body);
            font-weight: 600;
            font-size: 1.1rem;
            padding: 0.5rem 2rem;
            text-align: left;
            line-height: 0.5rem;
        }

        td {
            padding: 0.8rem 1rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.credit {
                color: var(--green);
            }

            &.debit {
                color: var(--red);
            }
        }

    }
`
