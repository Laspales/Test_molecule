'use client';
import './MoleculeListStyle.css'
import { motion } from 'framer-motion';

interface Props {
  molecules: { name: string; formule: string }[];
}

export default function MoleculeList({ molecules }: Props) {
  if (molecules.length === 0) {
    return <p>Aucune molécule ajoutée pour le moment.</p>;
  }

  return (
    <div className="molecule-list">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Formule</th>
            <th>Structure moléculaire</th>
          </tr>
        </thead>
        <tbody>
          {molecules.map((molecule, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <td>{molecule.name}</td>
              <td>{molecule.formule}</td>
              <td>
                <iframe
                  src={`https://embed.molview.org/v1/?mode=wire&smiles=${encodeURIComponent(
                    molecule.formule
                  )}`}
                  width="100"
                  height="100"
                  style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
