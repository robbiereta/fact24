'use client'
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FormPos from './formPos';
import './TabsComponent.css';
import ListaTicket from './lista_ticket';
interface TabsComponentProps {
  elements: {
    name: string;
    id: number;
    type: string;
    placeholder: string;
  }[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ elements }) => {
  const [key, setKey] = useState('pos');

  const tabStyle = {
    container: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '20px'
    },
    tabs: {
      borderBottom: '2px solid #dee2e6',
      marginBottom: '20px'
    },
    tab: {
      color: '#495057',
      padding: '12px 20px',
      fontWeight: 500,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        color: '#0d6efd',
        borderColor: '#0d6efd'
      }
    },
    activeTab: {
      color: '#0d6efd',
      borderColor: '#0d6efd'
    }
  };

  return (
    <div style={tabStyle.container}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k || 'pos')}
        className="mb-3"
        fill
        style={tabStyle.tabs}
      >
        <Tab 
          eventKey="pos" 
          title="Cobrar"
          tabClassName="custom-tab"
        >
          <FormPos elements={elements} />
        </Tab>
        <Tab 
          eventKey="history" 
          title="Recibos"
          tabClassName="custom-tab"
        >
          <div className="p-3">
            <h3>Historial de Ventas</h3>
            {/* Add sales history component here */}
            <ListaTicket recurso='/notas_venta'  />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
