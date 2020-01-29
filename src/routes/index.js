import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

import PlanList from '~/pages/Plan/List';
import PlanForm from '~/pages/Plan/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/planos" component={PlanList} isPrivate exact />
      <Route path="/planos/new" component={PlanForm} isPrivate />
      <Route path="/planos/:id/edit" component={PlanForm} isPrivate />
    </Switch>
  );
}
