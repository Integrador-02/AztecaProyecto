import config from "@config/config.json";

import { useTheme } from "next-themes";
import React, { useEffect } from 'react';
import


{ useState } from 'react';



const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleAddComment = () => {
    // Crear un nuevo objeto de comentario
    // Obtener la fecha y hora actual
  const currentDate = new Date();
  const timestamp = currentDate.toLocaleString();

  // Crear un nuevo objeto de comentario
  const newCommentObject = {
    id: comments.length + 1,
    text: newComment,
    username: 'KAREN', // Reemplaza 'Tu Nombre de Usuario' por tu variable o estado que contiene el nombre de usuario
    replyTo: replyTo,
    likes: 0,
    timestamp: timestamp, // Agregar la fecha y hora al comentario
  };

  // Agregar el nuevo comentario al estado
  setComments([...comments, newCommentObject]);

  // Limpiar el campo de entrada de comentarios
  setNewComment('');
  setReplyTo(null);

    // Agregar el nuevo comentario al estado
    setComments([...comments, newCommentObject]);

    // Limpiar el campo de entrada de comentarios
    setNewComment('');
    setReplyTo(null);
  };

  const handleReplyToComment = (commentId) => {
    // Buscar el comentario en el estado
    const commentToReply = comments.find((comment) => comment.id === commentId);

    if (commentToReply) {
      // Obtener el nombre de usuario del comentario al que se responde
      const usernameToReply = commentToReply.username;

      // Establecer el nombre de usuario al que se responde en el estado
      setReplyTo(usernameToReply);
    }
  };

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        // Verificar si el comentario ya ha sido liked
        if (comment.likes === 0) {
          // Incrementar el número de likes
          return { ...comment, likes: 1 };
        } else {
          // Disminuir el número de likes a cero
          return { ...comment, likes: 0 };
        }
      }
      return comment;
    });



    // Actualizar el estado con los comentarios actualizados
    setComments(updatedComments);
  };

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
              <p className="comment-timestamp">{comment.timestamp}</p> {/* Agregar esta línea para mostrar la fecha y hora */}
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
      <button onClick={handleAddComment}>Agregar comentario</button>
    </div>
  </div>
</main>


  );

};

const { disqus } = config;
const { meta_author } = config.metadata;

const PostSingle = ({
  frontmatter,

}) => {


  const { theme } = useTheme();

  // Local copy so we don't modify global config.

  return (

      <section className="section single-blog mt-6">
        <div className="container">
          <CommentSection/>
          <div className="row">
            <div className="lg:col-8">
             <div>


    </div>
            </div>
          </div>
        </div>

      </section>

  );
};

export default PostSingle;
