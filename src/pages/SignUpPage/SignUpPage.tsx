import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {InjectedFormProps} from 'redux-form';
import WizardFormFirstPage from './WizardFormFirstPage/WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage/WizardFormSecondPage';
import Paper from '@material-ui/core/Paper/Paper';
import Link from "@material-ui/core/Link";

const SignUpPage: React.FC<InjectedFormProps> = (props: any) => {
  const {onSubmit} = props;
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Paper style={{padding: 30, margin: '40px auto', maxWidth: 300}}>
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={nextPage}/>}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={previousPage}
            onSubmit={onSubmit}
          />
        )}
        <Link component={RouterLink} style={{display: 'block', marginTop: 20}} to="/">
          Sign In
        </Link>
      </div>
    </Paper>
  );
};

export default React.memo(SignUpPage);
