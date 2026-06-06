import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaEnvelope, FaEye, FaTrash, FaCheckCircle, FaUser, FaCalendarAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const { token, logout, user } = useAuth();

  // URL de l'API - CORRECTE (sans /api en double)
  const API_URL = import.meta.env.VITE_API_URL || 'https://darkgrey-kudu-778101.hostingersite.com/api';

  // Calculer les stats à partir des contacts
  const stats = {
    total: contacts.length,
    unread: contacts.filter(c => !c.is_read).length,
    read: contacts.filter(c => c.is_read).length
  };

  const fetchContacts = async () => {
    try {
      // URL CORRECTE : /admin/contacts (pas /api/admin/contacts)
      const response = await fetch(`${API_URL}/admin/contacts`, {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.data.data || []);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Erreur fetchContacts:', error);
      setError('Impossible de charger les contacts');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      const response = await fetch(`${API_URL}/admin/contacts/${id}/read`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        await fetchContacts(); // Attendre que les contacts soient rechargés
      }
    } catch (error) {
      console.error('Erreur markAsRead:', error);
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm('Supprimer ce message ?')) {
      try {
        const response = await fetch(`${API_URL}/admin/contacts/${id}`, {
          method: 'DELETE',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          await fetchContacts(); // Attendre que les contacts soient rechargés
        }
      } catch (error) {
        console.error('Erreur deleteContact:', error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchContacts();
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleLogout = async () => {
    await logout();
    // Rediriger vers la page de login admin
    window.location.href = '/admin';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ac5f2d] mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center text-red-500">Erreur: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Header admin */}
      <div className="bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Panel Administration FIFAP</h1>
              <div className="flex items-center gap-2 mt-1">
                <FaUser className="text-white/80 text-sm" />
                <p className="text-white/80 text-sm">Bienvenue, {user?.name || 'Admin'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
              <div className="text-gray-500">Total messages</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-yellow-600 text-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{stats.unread}</div>
              <div className="text-gray-500">Non lus</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{stats.read}</div>
              <div className="text-gray-500">Lus</div>
            </div>
          </div>
        </div>

        {/* Liste des messages */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">Messages reçus</h2>
            <p className="text-sm text-gray-500 mt-1">Liste des messages envoyés via le formulaire de contact</p>
          </div>
          
          {contacts.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <FaEnvelope className="text-4xl text-gray-300 mx-auto mb-3" />
              <p>Aucun message pour le moment</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {contacts.map(contact => (
                    <tr key={contact.id} className={`hover:bg-gray-50 transition-colors ${!contact.is_read ? 'bg-yellow-50/50' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{contact.prenom} {contact.nom}</div>
                        {contact.telephone && (
                          <div className="text-xs text-gray-500 mt-1">📞 {contact.telephone}</div>
                        )}
                       </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{contact.email}</td>
                      <td className="px-6 py-4">
                        <div className="max-w-xs truncate text-gray-600">{contact.message}</div>
                        </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          {new Date(contact.created_at).toLocaleString()}
                        </div>
                        </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-3">
                          <button 
                            onClick={() => setSelectedContact(contact)} 
                            className="text-blue-500 hover:text-blue-700 transition-colors" 
                            title="Voir le détail"
                          >
                            <FaEye size={18} />
                          </button>
                          {!contact.is_read && (
                            <button 
                              onClick={() => markAsRead(contact.id)} 
                              className="text-green-500 hover:text-green-700 transition-colors" 
                              title="Marquer comme lu"
                            >
                              <FaCheckCircle size={18} />
                            </button>
                          )}
                          <button 
                            onClick={() => deleteContact(contact.id)} 
                            className="text-red-500 hover:text-red-700 transition-colors" 
                            title="Supprimer"
                          >
                            <FaTrash size={18} />
                          </button>
                        </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal détail */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] px-6 py-4 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Détail du message</h3>
                <p className="text-white/80 text-sm">Message reçu le {new Date(selectedContact.created_at).toLocaleDateString()}</p>
              </div>
              <button 
                onClick={() => setSelectedContact(null)} 
                className="text-white hover:text-gray-200 text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(85vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Nom complet</label>
                  <p className="font-semibold text-gray-800 mt-1">{selectedContact.prenom} {selectedContact.nom}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Email</label>
                  <p className="font-semibold text-gray-800 mt-1 break-all">{selectedContact.email}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Téléphone</label>
                  <p className="font-semibold text-gray-800 mt-1">{selectedContact.telephone || 'Non renseigné'}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Date d'envoi</label>
                  <p className="font-semibold text-gray-800 mt-1">{new Date(selectedContact.created_at).toLocaleString()}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">Message</label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;