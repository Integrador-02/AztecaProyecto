import React, { useEffect } from 'react';
import { useState } from 'react';
import Cookies from "js-cookie";
import { Base1 } from '@layouts/Baseof';
import Avatar from "react-avatar";
import axios from "axios";
/**
 * Sesion de comentarios  de la categoria  jeraquia
 * @returns 
 */
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [email, setEmail] = useState('');
  const [visibleComments, setVisibleComments] = useState(3); // Cantidad de comentarios visibles inicialmente
  const [totalComments, setTotalComments] = useState(0); // Cantidad total de comentari
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


    const coment = newCommentObject.text
    const correo = newCommentObject.username
    const gusta = newCommentObject.likes
    const responde = newCommentObject.replyTo
    console.log(responde);
    axios.post("https://happy-fly-loincloth.cyclic.app/api/commit", { coment, correo, responde, gusta })
      .then(async () => {
        // Manejo de errores en caso de que falle la solicitud al backend
        alert("registrado correctamente");


      })
      .catch(async (error) => {
        console.log(error);
        // Manejo de errores en caso de que falle la solicitud al backend
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
    axios.get("https://happy-fly-loincloth.cyclic.app/api/comentarios", { email })
      .then((response) => {
        // Manipula los datos obtenidos como desees
        const comentarios = response.data;
        console.log(comentarios);
        let idCounter = 5; // Contador inicial
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function formatNumber(num) {
          return num.toString().padStart(2, '0');
        }

        function generateRandomDate() {
          const year = 2023;
          const month = getRandomInt(1, 12);
          const day = getRandomInt(1, 28);
          const hour = getRandomInt(0, 23);
          const minute = getRandomInt(0, 59);

          const formattedDate = `${year}-${formatNumber(month)}-${formatNumber(day)} ${formatNumber(hour)}:${formatNumber(minute)}`;
          return formattedDate;
        }

        const newC = comentarios.map((element) => {
          const newItem = {
            id: idCounter,
            text: element.coment,
            username: element.correo,
            replyTo: element.responde,
            likes: element.gusta,
            timestamp: generateRandomDate(),
          };
          idCounter++; // Incrementar el contador para el siguiente elemento
          return newItem;
        });





        fakeComments.push(...newC);

        setComments(fakeComments);

        // Resto de la lógica de manipulación de los comentarios
      })
      .catch((error) => {
        // Manejo de errores en caso de que falle la solicitud al backend
        console.log(error);
        alert("Ocurrió un error. Por favor, intenta nuevamente más tarde.");
      });

    const handleLoadMoreComments = () => {
      setVisibleComments((prevVisibleComments) => prevVisibleComments + 3); // Incrementa la cantidad de comentarios visibles
    };



  }, []);


  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 3);
  };

  return (
    <Base1>

      <section className="section pt-0" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>

        <h2 >Sesión de comentarios Jerarquía</h2>
        <ul className="comentario2 ">
          {comments.slice(0, visibleComments).reverse().map((comment) => (
            <li key={comment.id}>
              <div className="comment-container">
                <div className="avatar-circle">
                  <Avatar name={comment.username} size={50} round={true} />

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
          ))}{visibleComments < comments.length && (
            <button onClick={handleLoadMoreComments} className="d-block  btn btn-primary mt-4 w-full" type="submit">
              Mostrar más comentarios anteriores
            </button>
          )}
        </ul>
        <div>



          <div className="grid grid-cols-2 gap-1">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{ margin: '1rem' }}
            />
            <button onClick={handleAddComment} disabled={email === undefined} className="d-block  btn btn-primary mt-4 w-full" type="submit">
              Agregar comentario
            </button></div>
        </div>
   
      </section>


    </Base1>
  );
};

export default CommentSection;
