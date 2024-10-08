import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AdvertisementPage, AdvertisementsPage, OrdersPage } from '@pages/index';

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/advertisements" />} />
      <Route path="/advertisements" element={<AdvertisementsPage />} />
      <Route path="/advertisements/:id" element={<AdvertisementPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default RoutesWrapper;