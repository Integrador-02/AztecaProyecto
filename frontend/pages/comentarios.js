import config from "@config/config.json";
import Base from "@layouts/Baseof";
import InnerPagination from "@layouts/components/InnerPagination";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import { DiscussionEmbed } from "disqus-react";
import { MDXRemote } from "next-mdx-remote";
import { useTheme } from "next-themes";
import React, { useEffect } from 'react';
import { useState } from 'react';
import Cookies from "js-cookie";
import axios from "axios";




const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = Cookies.get('clave');
    setEmail(user);
  }, []);

  const handleAddComment = () => {
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString();

    const newCommentObject = {
      id: comments.length + 1,
      text: newComment,
      username: email,
      replyTo: replyTo,
      likes: 0,
      timestamp: timestamp,
    };

    const coment= newCommentObject.text
    const correo = newCommentObject.username
    const gusta = newCommentObject.likes
    const responde = "Null"
    axios.post("https://happy-fly-loincloth.cyclic.app/api/commit", { coment, correo,responde,gusta })
    .then(async () => {
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("registrado correctamente");
      

    })
    .catch(async (error) => {
      console.log(error);
      // Manejo de errores en caso de que falle la solicitud al backend
      alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
    });

  axios.get("https://happy-fly-loincloth.cyclic.app/api/comentarios", { email })
  .then((response) => {
    // Manipula los datos obtenidos como desees
    const comentarios = response.data;
    console.log(comentarios);
    // Resto de la lógica de manipulación de los comentarios
  })
  .catch((error) => {
    // Manejo de errores en caso de que falle la solicitud al backend
    console.log(error);
    alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
  });
    

    setComments([...comments, newCommentObject]);
    setNewComment('');
    setReplyTo(null);
  };

  
  
  const handleReplyToComment = (commentId) => {
    const commentToReply = comments.find((comment) => comment.id === commentId);

    if (commentToReply) {
      const usernameToReply = commentToReply.username;
      setReplyTo(usernameToReply);
    }
  };

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        if (comment.likes === 0) {
          return { ...comment, likes: 1 };
        } else {
          return { ...comment, likes: 0 };
        }
      }
      return comment;
    });

    setComments(updatedComments);
  };

  // Comentarios falsos de ejemplo
  const fakeComments = [
    {
      id: 1,
      text: '¡Me encantaría ver más información sobre los rituales aztecas!',
      username: 'brayan@gmail.com',
      replyTo: null,
      likes: 2,
      timestamp: '2023-06-09 15:30',
    },
    {
      id: 2,
      text: 'Sería genial si incluyen imágenes de los templos aztecas más importantes.',
      username: 'juan.castillo@gmail.com',
      replyTo: null,
      likes: 0,
      timestamp: '2023-06-10 09:45',
    },
    {
      id: 3,
      text: 'Me gustaría aprender sobre las divinidades aztecas y sus características.',
      username: 'victor@gmail.com',
      replyTo: null,
      likes: 1,
      timestamp: '2023-06-11 14:20',
    },
  ];

  useEffect(() => {
    setComments(fakeComments);
  }, []);

  return (
    <main className="app3">
      <div className="lado-izquierdo2">
        <h2>Comentarios</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-container">
                <div className="avatar-circle">
                  <img
                    src={`https://avatars.dicebear.com/api/male/${comment.id}.svg`}
                    alt="Avatar"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="comment-content">
                  <p className="comment-username">
                    <strong>{comment.username}</strong>
                  </p>
                  {comment.replyTo && (
                    <p className="reply-info">
                      En respuesta a: {comment.replyTo}
                    </p>
                  )}
                  <p className="comment-text">{comment.text}</p>
                  <p className="comment-timestamp">{comment.timestamp}</p>
                  <div className="comment-actions">
                    <button onClick={() => handleReplyToComment(comment.id)}>
                      Responder
                    </button>
                    <button onClick={() => handleLikeComment(comment.id)}>
                      {comment.likes} Likes
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment} disabled={ email ===undefined }>
            Agregar comentario
          </button>        </div>
      </div>
    </main>
  );
};

export default CommentSection;
