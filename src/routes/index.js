import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import PlanList from '~/pages/Plan/List';
import PlanForm from '~/pages/Plan/Form';

import StudentList from '~/pages/Student/List';
import StudentForm from '~/pages/Student/Form';

import EnrollmentList from '~/pages/Enrollment/List';
import EnrollmentForm from '~/pages/Enrollment/Form';

import HelperOrderList from '~/pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/planos" component={PlanList} isPrivate exact />
      <Route path="/planos/new" component={PlanForm} isPrivate />
      <Route path="/planos/:id/edit" component={PlanForm} isPrivate />

      <Route path="/alunos" component={StudentList} isPrivate exact />
      <Route path="/alunos/new" component={StudentForm} isPrivate exact />
      <Route path="/alunos/:id/edit" component={StudentForm} isPrivate exact />

      <Route path="/matriculas" component={EnrollmentList} isPrivate exact />
      <Route path="/matriculas/new" component={EnrollmentForm} isPrivate />
      <Route path="/matriculas/:id/edit" component={EnrollmentForm} isPrivate />

      <Route path="/help" component={HelperOrderList} isPrivate exact />
    </Switch>
  );
}
