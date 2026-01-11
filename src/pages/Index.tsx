import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [comments, setComments] = useState<{ [key: string]: Array<{ author: string; text: string; date: string }> }>({
    '1': [
      { author: 'Анна Петрова', text: 'Очень глубокий материал! Спасибо автору за проделанную работу.', date: '2 часа назад' },
      { author: 'Сергей М.', text: 'Интересная точка зрения. Хотелось бы увидеть продолжение этой темы.', date: '5 часов назад' }
    ]
  });
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const articles = [
    {
      id: '1',
      title: 'Цифровая революция в журналистике',
      excerpt: 'Как технологии меняют способы создания и потребления новостей в современном мире...',
      author: 'Мария Иванова',
      date: '15 января 2026',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
      category: 'Технологии'
    },
    {
      id: '2',
      title: 'Искусство интервью: секреты мастерства',
      excerpt: 'Профессиональные журналисты делятся опытом проведения глубинных интервью...',
      author: 'Алексей Смирнов',
      date: '12 января 2026',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      category: 'Мастерство'
    },
    {
      id: '3',
      title: 'Этика в современной журналистике',
      excerpt: 'Размышления о границах допустимого и роли журналистов в обществе...',
      author: 'Екатерина Волкова',
      date: '10 января 2026',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      category: 'Этика'
    }
  ];

  const authors = [
    {
      name: 'Мария Иванова',
      role: 'Главный редактор',
      bio: 'Более 15 лет в журналистике. Специализируется на технологических темах.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      articles: 24
    },
    {
      name: 'Алексей Смирнов',
      role: 'Корреспондент',
      bio: 'Журналист-расследователь с опытом работы в крупнейших изданиях.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      articles: 18
    },
    {
      name: 'Екатерина Волкова',
      role: 'Обозреватель',
      bio: 'Эксперт по социальным вопросам и общественным движениям.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      articles: 31
    }
  ];

  const handleAddComment = (articleId: string) => {
    if (newComment.trim() && commentAuthor.trim()) {
      setComments({
        ...comments,
        [articleId]: [
          { author: commentAuthor, text: newComment, date: 'Только что' },
          ...(comments[articleId] || [])
        ]
      });
      setNewComment('');
      setCommentAuthor('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary cursor-pointer" onClick={() => setActiveSection('home')}>
              Крылья будущего
            </h1>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('home')} className={`font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-gray-600'}`}>
                Главная
              </button>
              <button onClick={() => setActiveSection('about')} className={`font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-gray-600'}`}>
                О проекте
              </button>
              <button onClick={() => setActiveSection('articles')} className={`font-medium transition-colors hover:text-primary ${activeSection === 'articles' ? 'text-primary' : 'text-gray-600'}`}>
                Статьи
              </button>
              <button onClick={() => setActiveSection('authors')} className={`font-medium transition-colors hover:text-primary ${activeSection === 'authors' ? 'text-primary' : 'text-gray-600'}`}>
                Авторы
              </button>
              <button onClick={() => setActiveSection('contact')} className={`font-medium transition-colors hover:text-primary ${activeSection === 'contact' ? 'text-primary' : 'text-gray-600'}`}>
                Контакты
              </button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="relative py-24 md:py-32 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 animate-slide-up">
                  Крылья будущего
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 font-serif">
                  Журналистика нового поколения. Истории, которые вдохновляют и меняют мир.
                </p>
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => setActiveSection('articles')}>
                  Читать статьи
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4">Избранное</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Последние публикации</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <Badge className="absolute top-4 left-4">{article.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        <Icon name="User" size={14} className="inline mr-1" />
                        {article.author} • {article.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 font-serif">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="animate-fade-in py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">О проекте</h2>
            <div className="prose prose-lg max-w-none">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <p className="text-lg font-serif text-gray-700 leading-relaxed mb-6">
                    <strong className="text-primary">«Крылья будущего»</strong> — это независимая журналистская платформа, 
                    созданная для тех, кто ценит глубокую аналитику, честные репортажи и свежий взгляд на события.
                  </p>
                  <p className="text-lg font-serif text-gray-700 leading-relaxed mb-6">
                    Мы верим, что качественная журналистика — это крылья, которые поднимают общество к новым высотам 
                    понимания и прогресса. Наша миссия — освещать важные темы, давать голос тем, кто не слышен, 
                    и вдохновлять на позитивные изменения.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <Icon name="Target" size={32} className="mx-auto mb-4 text-primary" />
                      <h4 className="font-bold mb-2">Наша цель</h4>
                      <p className="text-sm text-gray-600">Объективное освещение событий</p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <Icon name="Heart" size={32} className="mx-auto mb-4 text-primary" />
                      <h4 className="font-bold mb-2">Наши ценности</h4>
                      <p className="text-sm text-gray-600">Честность, профессионализм, независимость</p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                      <h4 className="font-bold mb-2">Наша команда</h4>
                      <p className="text-sm text-gray-600">Опытные журналисты и эксперты</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'articles' && (
        <div className="animate-fade-in py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Статьи</h2>
            <div className="space-y-12">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img src={article.image} alt={article.title} className="w-full h-64 md:h-full object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge>{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 font-serif mb-6">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={authors.find(a => a.name === article.author)?.image} />
                            <AvatarFallback>{article.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{article.author}</p>
                            <p className="text-xs text-gray-500">Автор</p>
                          </div>
                        </div>
                        <Button variant="outline">
                          Читать полностью
                          <Icon name="ArrowRight" className="ml-2" size={16} />
                        </Button>
                      </div>

                      <div className="mt-8 pt-8 border-t">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <Icon name="MessageCircle" size={20} className="text-primary" />
                          Комментарии ({(comments[article.id] || []).length})
                        </h4>
                        
                        <div className="space-y-4 mb-6">
                          {(comments[article.id] || []).map((comment, idx) => (
                            <div key={idx} className="bg-orange-50 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-sm">{comment.author}</p>
                                  <p className="text-xs text-gray-500">{comment.date}</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-700">{comment.text}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <Input
                            placeholder="Ваше имя"
                            value={commentAuthor}
                            onChange={(e) => setCommentAuthor(e.target.value)}
                          />
                          <Textarea
                            placeholder="Напишите ваш комментарий..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            rows={3}
                          />
                          <Button onClick={() => handleAddComment(article.id)} className="w-full md:w-auto">
                            <Icon name="Send" size={16} className="mr-2" />
                            Отправить комментарий
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'authors' && (
        <div className="animate-fade-in py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Наши авторы</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {authors.map((author) => (
                <Card key={author.name} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary">
                      <AvatarImage src={author.image} />
                      <AvatarFallback>{author.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                    <p className="text-primary font-medium mb-3">{author.role}</p>
                    <p className="text-gray-600 text-sm mb-4 font-serif">{author.bio}</p>
                    <Badge variant="secondary">
                      <Icon name="FileText" size={14} className="mr-1" />
                      {author.articles} статей
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="animate-fade-in py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Контакты</h2>
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы всегда открыты для диалога и сотрудничества</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">info@wings-future.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Телефон</h4>
                      <p className="text-gray-600 text-sm">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold mb-4">Отправить сообщение</h4>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email" />
                    <Input placeholder="Тема сообщения" />
                    <Textarea placeholder="Ваше сообщение..." rows={5} />
                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Крылья будущего</h3>
              <p className="text-gray-400 text-sm font-serif">
                Журналистика, которая вдохновляет и меняет мир
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-primary transition-colors">О проекте</button></li>
                <li><button onClick={() => setActiveSection('articles')} className="hover:text-primary transition-colors">Статьи</button></li>
                <li><button onClick={() => setActiveSection('authors')} className="hover:text-primary transition-colors">Авторы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@wings-future.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Крылья будущего. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
