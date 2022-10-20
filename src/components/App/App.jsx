import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { MagnifyingGlass } from 'react-loader-spinner';
import { SearchBar } from 'components/SearchBar/SearchBar';
import * as API from '../../services/api';
import { Box } from '../App/App.styled';
import { ImageGalleryList } from 'components/ImageGalleryList/ImageGalleryList';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { LoadMoreBtn } from '../Button/Button';
// import { smoothScroll } from '../../services/smoothScroll';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    totalHits: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
          const images = await API.getImages({
          searchQuery: this.state.searchQuery,
          page: this.state.page,
          });
        if (images.totalHits === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({
          images: [...this.state.images, ...images.hits],
          totalHits: images.totalHits,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      images: [],
      isLoading: true,
    });
  };

  loadMore = () => {
    const totalPages = this.state.totalHits / 12;
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));

    if (this.state.page > totalPages) {
      this.setState({ isLoading: false });
      Notiflix.Notify.failure(
        `We're sorry, but you've reached the end of search results.`
      );
    }
    // smoothScroll();
  };

  render() {
    return (
      <Box>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isLoading && (
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        {this.state.images && (
          <ImageGalleryList images={this.state.images}>
            <GalleryItem />
          </ImageGalleryList>
        )}
        {this.state.images.length > 0 && (
          <LoadMoreBtn onLoadMore={this.loadMore} />
        )}
      </Box>
    );
  }
}
