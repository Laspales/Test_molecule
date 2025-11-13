'use client';

import './MoleculeFormStyle.css';
import { useState } from 'react';
import { listeMolecules } from './bddmolecule';

interface Props {
  onAdd: (name: string, formule: string) => void;
}

export default function MoleculeForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [formule, setFormule] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !formule) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    const normalizeString = (str: string) =>
      str
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const moleculeExist = listeMolecules.find(
      (mol) =>
        normalizeString(mol.name) === normalizeString(name) &&
        normalizeString(mol.formule) === normalizeString(formule)
    );

    if (!moleculeExist) {
      setError('Molécule inconnue. Vérifiez le nom ou la formule.');
      return;
    }

    onAdd(name, formule);
    setName('');
    setFormule('');
  };

  return (
    <form onSubmit={handleSubmit} className="molecule-form">
      <input
        type="text"
        placeholder="Nom de la molécule (ex : Eau)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Formule (ex : H2O)"
        value={formule}
        onChange={(e) => setFormule(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Ajouter</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
