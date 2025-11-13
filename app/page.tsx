'use client';

import { useState } from 'react';
import MoleculeForm from '../components/MoleculeForm';
import MoleculeList from '../components/MoleculeList';

export default function Home() {
  const [molecules, setMolecules] = useState<{ name: string; formule: string }[]>([]);

  const addMolecule = (name: string, formule: string) => {
    const newMolecules = [...molecules, { name, formule }];
    setMolecules(newMolecules);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🔬 Gestion des molécules 🧪</h1>
      <br />
      <h3>Ajouter une molécule et sa formule</h3>
      <br />
      <MoleculeForm onAdd={addMolecule} />
      <br />
      <h3>Liste des molécules</h3>
      <br />
      <MoleculeList molecules={molecules} />
    </main>
  );
}
