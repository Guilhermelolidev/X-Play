import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  img {
    width: 142px;
    height: 142px;
  }

  .titleCardImage {
    font-size: 16px;
    color: var(--white);
    font-weight: var(--light);
    margin-top: 13px;
  }
`;
